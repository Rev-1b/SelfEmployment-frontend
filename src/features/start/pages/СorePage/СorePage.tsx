import { Box, Typography, IconButton } from "@mui/material";
import { Outlet } from 'react-router-dom';

import { FC, useEffect, useState } from "react";
import { styles } from './CorePage.styles';


const images = [
    { src: '/images/initialPage/carousel1.png' },
    // {src: 'images/initialPage/carousel2.png'},  Это козел, который пока плохо отображается
    { src: '/images/initialPage/carousel3.png' },
];

const CorePage: FC = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => prevImage === images.length - 1 ? 0 : prevImage + 1);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={styles.container}>
            <Box sx={styles.leftSide}>
                <img src="/images/initialPage/logo.png" alt="Рога и копыта" style={styles.logo} />
                <Typography variant="h6" sx={styles.subtitle}>
                    Бесплатная бухгалтерия<br />
                    для самозанятых
                </Typography>

                <Box sx={styles.carouselContainer}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`slide-${index + 1}`}
                            style={{
                                ...styles.carouselImage,
                                opacity: index === currentImage ? 1 : 0,
                            }}
                        />
                    ))}
                </Box>

                <Box sx={styles.carouselIndicators}>
                    {images.map((_, index) => (
                        <IconButton
                            key={index}
                            sx={{
                                ...styles.carouselDot,
                                ...(index === currentImage ? styles.activeDot : {}),
                            }}
                            onClick={() => setCurrentImage(index)}
                        />
                    ))}
                </Box>
            </Box>

            <Box sx={styles.rightSide}>
                <Outlet />
            </Box>
        </Box>
    );
}

export default CorePage