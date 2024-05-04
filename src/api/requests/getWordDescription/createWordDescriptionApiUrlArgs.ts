interface CreateWordDescriptionApiUrlAgrs {
  version: string;
  language: string;
  word: string;
}

export const createWordDescriptionApiUrlAgrs = ({
  version,
  language,
  word,
}: CreateWordDescriptionApiUrlAgrs) => {
  return `${version}/entries/${language}/${word}`;
};
