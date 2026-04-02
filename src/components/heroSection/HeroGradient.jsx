const HeroGradient = () => {
  return (
    <div className="pointer-events-none">
      <div className="absolute top-10 right-[300px] -z-10 glow-blob-cyan animate-float" />
      <div className="absolute top-[5%] left-[-50px] -z-10 glow-blob-orange opacity-60 animate-float-delayed" />
      <div className="absolute top-0 right-0 -z-10 glow-blob-orange animate-float" />
      <div className="absolute top-[40%] left-[10%] -z-10 glow-blob-cyan opacity-40 animate-float-delayed" />
    </div>
  );
};

export default HeroGradient;
