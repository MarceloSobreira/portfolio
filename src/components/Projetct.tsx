import styles from './Project.module.css';

interface RepositoryProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
  }
}

export function Project(props: RepositoryProps) {

  return (
    <a href={props.repository.html_url} target="_blank" className={styles.container}>
      <header>
        <img src="/src/assets/folder.svg" alt="" />
        <strong>{props.repository.name}</strong>
      </header>
      <p>{props.repository.description}</p>
      <footer>
        <div className={styles.icons}>
          <img src="/src/assets/star.svg" alt="" />
          {props.repository.stargazers_count}
          <img src="/src/assets/git-branch.svg" alt="" />
          {props.repository.forks_count}
        </div>
        <span>{props.repository.language}</span>
      </footer>
    </a>
  )
}