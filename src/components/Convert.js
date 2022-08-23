import { useEffect, useState } from "react";
import axios from "axios";

const Convert = ({ lang, text }) => {
  const [translated, setTranslated] = useState("");
  const [debounced, setDebounced] = useState(text);

  const Url = "https://translation.googleapis.com/language/translate/v2";
  const KEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      const { data } = await axios.post(
        Url,
        {},
        {
          params: {
            q: debounced,
            target: lang.value,
            key: KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslate();
  }, [lang, debounced]);

  return (
    <div className="translate">
      <h1>{translated}</h1>
    </div>
  );
};
export default Convert;
