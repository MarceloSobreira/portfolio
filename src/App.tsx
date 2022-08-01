import { Sidebar } from './components/Sidebar'
import { Content } from './components/Content'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <main>
        <Content />
      </main>
      <footer></footer>
    </div>

  )
}

export default App
