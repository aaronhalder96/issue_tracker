import { Link as Radixlink } from "@radix-ui/themes";
import NextLink from "next/link";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Radixlink>{children}</Radixlink>
    </NextLink>
  );
};

export default Link;
