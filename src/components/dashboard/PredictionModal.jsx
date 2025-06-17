import { X, Square, RotateCcw } from 'lucide-react';

const PredictionModal = ({ currentPrediction, onClose, onStop, onRegenerate }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.96)' }}>
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 max-w-md w-full">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-white mb-4">AI Prediction</h2>
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">{currentPrediction.coin}</h3>
            <p className="text-gray-300 text-sm mb-4">{currentPrediction.text}</p>
            
            <div className="bg-gray-600 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Accuracy</span>
                <span className="text-blue-400 font-bold">{currentPrediction.accuracy}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${currentPrediction.accuracy}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <X className="w-4 h-4" />
            <span>Close</span>
          </button>
          <button
            onClick={onStop}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <Square className="w-4 h-4" />
            <span>Stop</span>
          </button>
          <button
            onClick={onRegenerate}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded font-medium transition-colors flex items-center justify-center space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Regenerate</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionModal;