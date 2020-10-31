import altImg from './alt-img.png';

const useDefaultImg = () => {
    const defaultSrc = (e: any) => {
        e.target.src = altImg;
    };
    return defaultSrc
}

export default useDefaultImg
