const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  font-mont">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-8">Page not found</p>
      <a
        href="/"
        className="px-4 py-2 text-lg text-white bg-dark font-bold rounded shadow "
      >
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
