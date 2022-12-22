import { Link } from '@remix-run/react';

const Index = () => {
  return (
    <main className="flex flex-col items-center justify-center text-center gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen px-20">
      <h1 className="text-4xl font-semibold text-white/75">
        A better way of keeping track of your notes
      </h1>
      <h6 className="text-xl text-white/75">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis id at
        sint earum doloremque quod placeat iusto repudiandae consequuntur,
        facere quas nam recusandae et dolorum saepe cumque quidem cum sunt.
      </h6>
      <Link
        to="/notes"
        className="px-6 py-3 bg-orange-400/95 hover:bg-orange-400 rounded-md text-white font-bold border-dashed border-4 border-white text-2xl"
      >
        Try now!
      </Link>
    </main>
  );
};

export default Index;
