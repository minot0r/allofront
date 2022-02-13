export default function KimonoHello(props) {
  const { className, name, ...rest } = props;
  const words = [
    "Katana",
    "Japon",
    "Kimono",
    "Chine",
    "Kim Jong Il",
    "Kim Jong Un",
    "Naruto",
    "Senpai",
    "Samurai",
    "Ninja",
  ];
  const prefixes = ["Ninja", "Samurai", "Senpai", "San"];
  const createName = (name) => {
    const generate = (name) => {
      for (let word of words) {
        let firstLetter = name.charAt(0).toLowerCase();
        for (let letter of word) {
          console.log(letter, firstLetter);
          if (
            firstLetter === letter.toLowerCase() &&
            word.lastIndexOf(firstLetter) >= 3
          ) {
            console.log(
              word.substring(0, word.lastIndexOf(firstLetter) - 1) + name
            );
            return word.substring(0, word.lastIndexOf(firstLetter)) + name;
          }
        }
      }
      return null;
    };
    if(generate(name.split(' ')[0])) return generate(name.split(' ')[0]);
    if(generate(name.split(' ')[1])) return generate(name.split(' ')[1]);
    let prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    return `${prefix} ${name}`;
  };
  return (
    <div className={"kimono-hello " + (className ? className : "")} {...rest}>
      <h1>Bonjour {name}!</h1>
      <h3>Merci de soutenir Kimonodvie 🙏</h3>
      <p>
        Pour te remercier, nous t'avons créé un nom de personnage :{" "}
        <strong>{createName(name)}</strong>
      </p>
    </div>
  );
}
