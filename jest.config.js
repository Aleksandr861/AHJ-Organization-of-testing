module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '\\.(svg|png)$': '<rootDir>/__mocks__/fileMock.js'
    }
};
// module.exports = {
//     moduleNameMapper: {
//         '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//       '<rootDir>/__mocks__/fileMock.js',
//         '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
//     },
// };

