import Link from 'next/link';

const WelcomePage = () => {
  return (
      <div className="flex min-h-screen w-full items-center justify-center bg-gray-800 text-center text-white">
          <div>
              <div>
              </div>
              <h1 className="text-4xl font-bold">Welcome to Open Quiz</h1>
              <p className="mt-2 text-lg">Created By Supernova3339</p>
              <div className="mt-4 flex justify-center gap-3">
                  <Link href="/quiz" className="btn">
                      Start Quiz
                  </Link>
              </div>
          </div>
      </div>
  );
};

export default WelcomePage;
