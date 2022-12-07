export const Footer = () => {
  return (
    <footer className="bg-black py-8 text-center text-white">
      <div>
        <a>
          Made with ❤️ by{" "}
          <a
            href="https://twitter.com/miguelgargallo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue text-indigo-600"
          >
            Miguel Gargallo
          </a>
          .
        </a>
      </div>
      <div>
        <a>
          2022 ©{" "}
          <a
            href="https://huggingface.co/spaces/superdatas/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue text-indigo-600"
          >
            Pylar&trade; AI creative ML license
          </a>
          .
        </a>
      </div>
      <div className="hidden sm:block">
        <div className="flex w-full items-center justify-center">
          <a
            href="https://huggingface.co/spaces/superdatas/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden p-2 md:block"
          >
            <picture>
              <img
                src="https://huggingface.co/front/assets/huggingface_logo.svg"
                alt="Landscape picture"
                width={40}
                height={20}
              />
            </picture>
          </a>
        </div>
      </div>
      <p
      className="text-white"
      >The Art of Prompting, tomorrow, today.</p>
    </footer>
  );
};
