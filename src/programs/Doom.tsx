import { useState } from 'react';
import styles from './Doom.module.css';

interface DoomProps {
  id: number;
}

const Doom = ({ id }: DoomProps) => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className={styles.doomContainer}>
      <div className={styles.header}>
        <h2>🔥 DOOM - Classic FPS</h2>
        <p>Classic DOOM in your browser!</p>
      </div>
      
      {!gameStarted ? (
        <div className={styles.startScreen}>
          <div className={styles.doomLogo}>
            <h1>DOOM</h1>
            <p>The Ultimate Experience in Grueling Terror</p>
          </div>
          <button 
            className={styles.startButton}
            onClick={startGame}
          >
            🎮 START GAME
          </button>
          <div className={styles.controls}>
            <p><strong>Controls:</strong></p>
            <ul>
              <li>Arrow Keys - Move</li>
              <li>Ctrl - Fire</li>
              <li>Space - Open doors/Use</li>
              <li>Shift - Run</li>
              <li>Tab - Map</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.gameFrame}>
          <iframe
            src="https://js-dos.com/games/doom.exe"
            width="100%"
            height="500px"
            style={{
              border: '2px inset #c0c0c0',
              backgroundColor: '#000'
            }}
            title="DOOM Game"
            allow="fullscreen"
          />
          <div className={styles.gameControls}>
            <button 
              className={styles.restartButton}
              onClick={() => setGameStarted(false)}
            >
              🔄 Back to Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doom;
