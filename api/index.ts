//  Recebendo uma lista de repositórios do GitHub via props
export interface Repo {
  name: string;
  description: string;
  html_url: string;
  theme?: string;
}

export interface RepoObserver {
  update: (state: ReqState, repos: Repo[]) => void;
}

export type ReqState = "IDLE" | "LOADING" | "SUCCESS" | "ERROR";

// GitHub API class comunication
class GithubReposAPI {
  constructor() {}
  private components: RepoObserver[] = []; // Vector of observers
  private repos: Repo[] = []; // Vector of my repositories
  private state: ReqState = "IDLE"; // Initial state of the subject
  // Add a component to the list of components on hear
  componentAdd(component: RepoObserver): void {
    this.components.push(component);
  }
  // Remove a component from the list of components
  componentRemove(component: RepoObserver): void {
    this.components = this.components.filter((c) => c !== component);
  }
  // Ping all components to update their state
  pingToComponents(): void {
    this.components.forEach((component) =>
      component.update(this.state, this.repos),
    );
  }
  // Set state to true after successful fetch
  setState(newState: ReqState): void {
    this.state = newState;
    this.pingToComponents();
  }
  getState(): ReqState {
    return this.state;
  }
  getRepos(): Repo[] {
    return this.repos;
  }

  // Get 6 lasts repos
  // async getLasts() {
  //   this.state = "LOADING";
  //   this.pingToComponents();
  //   try {
  //     const response = await fetch(
  //       "https://api.github.com/users/gabrielcassio/repos?sort=updated&per_page=6",
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     const onlyOwnRepos = data.filter((repo: any) => !repo.fork);
  //     this.state = "SUCCESS";
  //     return onlyOwnRepos;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // // Get a single repo by name
  // async get(repoName: string) {
  //   this.state = "LOADING";
  //   this.pingToComponents();
  //   try {
  //     const response = await fetch(
  //       `https://api.github.com/repos/gabrielcassio/${repoName}`,
  //     );
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     this.state = "SUCCESS";
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     this.pingToComponents();
  //   }
  // }
  // Get many repos by name
  async getMany(repoNames: string[] = []) {
    // Verify if the state of the promise is LOADING
    if (this.state == "LOADING") return;
    // Case is not LOADING then is turnON
    this.state = "LOADING";
    this.pingToComponents();

    // Vector of repos names
    const repos =
      repoNames.length > 0
        ? repoNames
        : [
            "Projeto-Final-Introducao-Programacao",
            "Projeto-Final-Sistemas-Digitais",
            "Home-Page-IF-Dynamic-Times",
            "Interface-Apple-Site",
          ];
    // Start the Promise
    try {
      const responses = await Promise.allSettled(
        repos.map((repoName) =>
          fetch(`https://api.github.com/repos/gabrielcassio/${repoName}`).then(
            (res) => {
              if (!res.ok) throw new Error(`Repo ${repoName} not found`);
              return res.json();
            },
          ),
        ),
      );
      this.repos = responses
        .filter(
          (result): result is PromiseFulfilledResult<any> =>
            result.status === "fulfilled",
        )
        .map((result) => result.value);

      this.state = this.repos.length == 0 ? "ERROR" : "SUCCESS";
    } catch (error) {
      console.error(error);
      this.state = "ERROR";
    } finally {
      this.pingToComponents();
    }
  }
}

export default new GithubReposAPI();
