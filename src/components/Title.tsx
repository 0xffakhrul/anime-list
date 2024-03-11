import { FC } from "react";

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return <h1 className="font-semibold text-3xl py-5">{title}</h1>;
};

export default Title;
