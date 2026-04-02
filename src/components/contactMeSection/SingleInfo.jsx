const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center group">
      <div
        className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{
          background: "rgba(21,209,233,0.1)",
          border: "1px solid rgba(21,209,233,0.25)",
          boxShadow: "0 0 8px rgba(21,209,233,0.1)",
        }}
      >
        <Image className="text-lg text-cyan" />
      </div>
      <p className="text-lightGrey text-sm group-hover:text-white transition-colors duration-300 break-all">
        {text}
      </p>
    </div>
  );
};

export default SingleInfo;
