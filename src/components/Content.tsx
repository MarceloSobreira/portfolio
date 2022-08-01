import { useEffect, useState } from 'react';
import api from '../services/api';

import styles from './Content.module.css'
import { Project } from './Projetct'

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export function Content() {
  const [repos, setRepos] = useState<Repository[]>([])

  useEffect(() => {
    api.get("")
      .then(response => {
        setRepos(response.data)
      })
  }, []);

  return (
    <div>
      <section>
        <div className={styles.container}>
          <strong>My projects</strong>
          <a href="https://github.com/MarceloSobreira?tab=repositories" target="_blank">Veja Todos</a>
        </div>
        <div className={styles.containerProjects}>
          {repos.map(repository => {
            return <Project key={repository.id} repository={repository} />
          })}
        </div>
      </section>
      <div className={styles.container}>
        <strong>Recent Posts</strong>
      </div>
    </div>
  )
}