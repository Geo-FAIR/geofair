export default function LogoCarousel() {
  const logos = [
    '/assets/logos/agu.png',
    '/assets/logos/esip.png',
    '/assets/logos/wds.png',
    '/assets/logos/earthscope.png',
    '/assets/logos/cuahsi.png'
  ];

  return (
    <div className="overflow-hidden py-8">
      <div className="flex gap-12 animate-scroll">
        {logos.concat(logos).map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Collaborating organization logo"
            className="h-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
