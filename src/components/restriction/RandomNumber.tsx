type randomNumberType = { value: number };

type PositiveNumber = randomNumberType & {
  positive: boolean;
  negative?: never;
  zero?: never;
};
type NegativeNumber = randomNumberType & {
  positive?: never;
  negative: boolean;
  zero?: never;
};
type Zero = randomNumberType & {
  positive?: never;
  negative?: never;
  zero: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

const RandomNumber = ({ value, positive, negative, zero }: RandomNumberProps) => {
  return (
    <div>
      {value} {positive && "Positive"} {negative && "Negative"}
      {zero && "Zero"}
    </div>
  );
};
export default RandomNumber;
