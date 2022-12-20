import Input from '~/components/Input';

const NotesPage = () => {
  return (
    <main className="flex text-center gap-10 bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-32 px-5">
      <section className="container border border-slate-300 rounded-lg pt-10 pb-5 px-5 flex flex-col gap-10 h-fit">
        <h1 className="font-semibold text-2xl text-white/80">
          What are your thoughts?
        </h1>
        <form
          id="form"
          method="post"
          className="container bg-white/25 rounded-lg flex flex-col gap-5 text-start p-10"
        >
          <Input
            type="input"
            label="Title"
            placeholder="E.g. Create a new Remix project..."
          />
          <Input
            type="textarea"
            label="Description"
            placeholder="E.g. Create a message application that blocks fake news being shared..."
          />
          <button
            type="submit"
            className="flex place-self-end px-6 py-3 bg-orange-400/95 hover:bg-orange-400 rounded-md text-white font-bold border-dashed border-4 border-white text-xl"
          >
            Add note
          </button>
        </form>
      </section>
      <section className="container border border-slate-300 rounded-lg py-10 px-5 mb-10">
        <h1 className="font-semibold text-2xl text-white/80">Your notes</h1>
      </section>
    </main>
  );
};

export default NotesPage;
