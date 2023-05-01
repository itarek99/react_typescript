type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`btn-${variant}`} {...rest}>
      {children}
    </button>
  );
};
export default Button;
