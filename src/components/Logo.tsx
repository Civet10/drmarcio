import { Bone } from 'lucide-react';

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-12 h-12 bg-gradient-to-br from-emerald-700 to-emerald-900 rounded-lg flex items-center justify-center">
          <Bone className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 leading-tight">Márcio Miranda</span>
        <span className="text-xs text-emerald-700 font-semibold">ORTOPEDIA VETERINÁRIA</span>
      </div>
    </div>
  );
}

export default Logo;
