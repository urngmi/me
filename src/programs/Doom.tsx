interface DoomProps {
  id: number;
}

const Doom = ({ id }: DoomProps) => {
  return (
    <div style={{ width: '100%', height: '100%', padding: 0, margin: 0 }}>
      <iframe
        src="https://js-dos.com/games/doom.exe"
        width="100%"
        height="100%"
        style={{
          border: 'none',
          backgroundColor: '#000',
          display: 'block'
        }}
        title="DOOM Game"
        allow="fullscreen"
      />
    </div>
  );
};

export default Doom;
