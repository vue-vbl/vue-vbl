export default function uniqueId(prefix) {
    return `${prefix}-${Math.random().toString(16).substr(2, 10)}`;
};