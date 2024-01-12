const KEYS = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

type KeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2  ">
      <div className="flex gap-2">
        {KEYS.slice(0, 10).map((key, index) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              disabled={isActive || isInactive || disabled}
              onClick={() => addGuessedLetter(key)}
              key={index}
              className={`w-20 h-20 text-4xl ${isActive && "bg-blue-400"} ${
                isInactive && "bg-gray-400"
              } font-bold uppercase border-2 border-gray-700 hover:bg-[rgb(129,213,255)]`}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        {KEYS.slice(10, 19).map((key, index) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              disabled={isActive || isInactive || disabled}
              onClick={() => addGuessedLetter(key)}
              key={index + 7}
              className={`w-20 h-20 text-4xl ${isActive && "bg-blue-400"} ${
                isInactive && "bg-gray-400"
              } font-bold uppercase border-2 border-gray-700 hover:bg-[rgb(129,213,255)]`}
            >
              {key}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2">
        {KEYS.slice(19, 26).map((key, index) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              disabled={isActive || isInactive || disabled}
              onClick={() => addGuessedLetter(key)}
              key={index + 14}
              className={`w-20 h-20 text-4xl ${isActive && "bg-blue-400"} ${
                isInactive && "bg-gray-400"
              } font-bold uppercase border-2 border-gray-700 hover:bg-[rgb(129,213,255)]`}
            >
              {key}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
