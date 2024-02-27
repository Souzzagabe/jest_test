module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>./.jest/setup-teste.tsx'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$':'<rootDir>./.jest/mock/filemMock.tsx'
    },
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
}
