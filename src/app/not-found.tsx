import Link from 'next/link';
import Icon from '@/components/Icon';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Icon name="AlertCircle" className="w-20 h-20 text-blue-600" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 flex items-center justify-center"
          >
            <Icon name="Home" className="w-5 h-5 mr-2" />
            Return Home
          </Link>
          
          <Link
            href="/issues"
            className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
          >
            <Icon name="List" className="w-5 h-5 mr-2" />
            Browse Issues
          </Link>
        </div>
      </div>
    </div>
  );
}