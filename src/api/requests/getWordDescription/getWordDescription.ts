import { MyAxiosInstance } from '../../axiosInstances/WordDescriptionAxiousIntance/WordDescriptionAxiousIntance';

export function getWordDescription(word: string) {
  return MyAxiosInstance.get(`${word}`);
}
