
import React, { useState, useCallback } from 'react';
import { Score, Option, PersonalityType, Trait } from './types';
import { QUESTIONS, GROWTH_QUESTIONS, PERSONALITY_TYPES } from './constants';
import Layout from './components/Layout';
import MainScreen from './components/MainScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import CharacterCollection from './components/CharacterCollection';

type AppState = 'START' | 'QUESTION' | 'RESULT' | 'COLLECTION';
type TestType = 'PERSONALITY' | 'GROWTH';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<AppState>('START');
  const [currentTest, setCurrentTest] = useState<TestType>('PERSONALITY');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Score>({
    E: 0, I: 0, O: 0, S: 0, C: 0, P: 0, A: 0, N: 0, F: 0, T: 0, SCORE: 0
  });
  const [result, setResult] = useState<PersonalityType | null>(null);

  const handleStart = useCallback((testType: TestType) => {
    setCurrentTest(testType);
    setGameState('QUESTION');
    setCurrentQuestionIndex(0);
    setScores({ E: 0, I: 0, O: 0, S: 0, C: 0, P: 0, A: 0, N: 0, F: 0, T: 0, SCORE: 0 });
  }, []);

  const handleOpenCollection = useCallback(() => setGameState('COLLECTION'), []);
  const handleBackToStart = useCallback(() => setGameState('START'), []);

  const calculatePersonalityResult = (finalScores: Score) => {
    const sortedTraits = (Object.keys(finalScores) as Trait[])
      .filter(t => t !== 'SCORE')
      .sort((a, b) => (finalScores[b] || 0) - (finalScores[a] || 0));
    const topTraits = sortedTraits.slice(0, 3);

    const checks = [
      { id: 'EO', traits: ['E', 'O'] },
      { id: 'EC', traits: ['E', 'C'] },
      { id: 'EF', traits: ['E', 'F'] },
      { id: 'IO', traits: ['I', 'O'] },
      { id: 'IC', traits: ['I', 'C'] },
      { id: 'IA', traits: ['I', 'A'] },
      { id: 'AF', traits: ['A', 'F'] },
      { id: 'NO', traits: ['N', 'O'] },
    ];

    for (const check of checks) {
      if (check.traits.every(t => topTraits.includes(t as Exclude<Trait, 'SCORE'>))) {
        return PERSONALITY_TYPES.find(p => p.id === check.id && p.testId === 'PERSONALITY');
      }
    }
    return PERSONALITY_TYPES.filter(p => p.testId === 'PERSONALITY')[0];
  };

  const calculateGrowthResult = (finalScores: Score) => {
    const total = finalScores.SCORE || 0;
    if (total >= 22) return PERSONALITY_TYPES.find(p => p.id === 'ELECTRIC_MAGENTA');
    if (total >= 18) return PERSONALITY_TYPES.find(p => p.id === 'DYNAMIC_BLUE');
    if (total >= 13) return PERSONALITY_TYPES.find(p => p.id === 'VIVID_GREEN');
    if (total >= 9) return PERSONALITY_TYPES.find(p => p.id === 'ENERGETIC_YELLOW');
    return PERSONALITY_TYPES.find(p => p.id === 'SOFT_LAVENDER');
  };

  const handleSelectOption = useCallback((option: Option) => {
    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([trait, value]) => {
      newScores[trait] = (newScores[trait] || 0) + (value || 0);
    });
    setScores(newScores);

    const activeQuestions = currentTest === 'PERSONALITY' ? QUESTIONS : GROWTH_QUESTIONS;

    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const matchedType = currentTest === 'PERSONALITY' 
        ? calculatePersonalityResult(newScores)
        : calculateGrowthResult(newScores);
      
      setResult(matchedType || null);
      setGameState('RESULT');
    }
  }, [scores, currentQuestionIndex, currentTest]);

  const handlePrev = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  }, [currentQuestionIndex]);

  return (
    <Layout>
      {gameState === 'START' && <MainScreen onStart={handleStart} onOpenCollection={handleOpenCollection} />}
      {gameState === 'QUESTION' && (
        <QuestionScreen 
          question={(currentTest === 'PERSONALITY' ? QUESTIONS : GROWTH_QUESTIONS)[currentQuestionIndex]}
          currentStep={currentQuestionIndex + 1}
          totalSteps={(currentTest === 'PERSONALITY' ? QUESTIONS : GROWTH_QUESTIONS).length}
          onSelect={handleSelectOption}
          onPrev={handlePrev}
        />
      )}
      {gameState === 'RESULT' && result && (
        <ResultScreen result={result} onRestart={handleBackToStart} />
      )}
      {gameState === 'COLLECTION' && (
        <CharacterCollection onBack={handleBackToStart} />
      )}
    </Layout>
  );
};

export default App;
