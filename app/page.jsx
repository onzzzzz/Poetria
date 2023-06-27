import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Poems </span>
    </h1>
    <p className='desc text-center'>
      Poetria is a blog style platform for poem writers to write, share & discover poems.
    </p>

    <Feed />
  </section>
);

export default Home;
