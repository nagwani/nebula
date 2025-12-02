import Image from 'next-image-standalone';


const LogoCard = ({
  backgroundColor = '#F1F5F9',
  image,
}) => {
  const { src, alt, width, height } = image;
  return (
    <div
      className="align-center max-h-33 max-w-50 gap-4 rounded-2xl p-6 flex flex-col justify-center leading-[normal]"
      style={{ backgroundColor }}
    >
      <Image { ...{ src, alt, width, height } } className="w-50 h-auto object-contain" />
    </div>
  )
}

export default LogoCard