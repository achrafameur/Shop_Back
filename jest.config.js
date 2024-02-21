module.exports = {
    // Spécifie les dossiers contenant les tests
    testMatch: ['<rootDir>/tests/test.js'],
  
    // Spécifie les dossiers à exclure des tests
    testPathIgnorePatterns: ['/node_modules/'],
  
    // Indique à Jest d'utiliser jsdom comme environnement de test
    testEnvironment: 'jsdom',
  
    // Permet d'ajouter des plugins ou des configurations supplémentaires si nécessaire
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
    // Spécifie les extensions de fichiers à rechercher pour les tests
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  
    // Configure le rapport de couverture de code
    coverageReporters: ['text', 'lcov'],
  
    // Vous pouvez ajouter d'autres options de configuration selon vos besoins
  };
  