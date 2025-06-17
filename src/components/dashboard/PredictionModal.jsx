import { X, Square, RotateCcw } from 'lucide-react';

const PredictionModal = ({ currentPrediction, onClose, onStop, onRegenerate }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-10 max-w-xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">AI Prediction</h2>
          <div className="bg-gray-700 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">{currentPrediction.coin}</h3>
            <p className="text-gray-300 text-lg mb-6">{currentPrediction.text}</p>
            <div className="bg-gray-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-400 text-lg">Accuracy</span>
                <span className="text-blue-400 font-bold text-lg">{currentPrediction.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="bg-blue-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${currentPrediction.accuracy}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-6 py-3 rounded text-lg font-bold transition-colors flex items-center justify-center space-x-2"
          >
            <X className="w-6 h-6" />
            <span>Close</span>
          </button>
          <button
            onClick={onStop}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded text-lg font-bold transition-colors flex items-center justify-center space-x-2"
          >
            <Square className="w-6 h-6" />
            <span>Stop</span>
          </button>
          <button
            onClick={onRegenerate}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded text-lg font-bold transition-colors flex items-center justify-center space-x-2"
          >
            <RotateCcw className="w-6 h-6" />
            <span>Regenerate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionModal;