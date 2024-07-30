import Block from "../Block";
import Image from "next/image";

type BlockProps = {
  src: string;
  altText: string;
};

const ImageBlock = ({
  src,
  altText
}: BlockProps) => {
    return (
      <Block className="col-span-1 hidden md:block">
        <Image 
          src={src}
          alt={altText} 
          className="rounded-lg w-full h-full object-cover"
          width={200}
          height={100}
        />
      </Block>
    );
};

ImageBlock.displayName = "ImageBlock";

export default ImageBlock;