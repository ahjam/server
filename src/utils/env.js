const NODE_ENV = process.env.NODE_ENV;

export default {
    isProduction: () => NODE_ENV === 'production'
};
