import Picture1 from '../../public/images/ai-kissa10.webp';
import Picture2 from '../../public/images/ai-kissa9.webp';
import Picture3 from '../../public/images/ai-kissa7.webp';
import Picture4 from '../../public/images/ai-kissa5.webp';
import Picture5 from '../../public/images/ai-kissa2.webp';
import Picture6 from '../../public/images/ai-kissa3.webp';
import Picture7 from '../../public/images/ai-kissa8.webp';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Index() {

    const containerZoomParallax = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerZoomParallax,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]

    return (

        <div ref={containerZoomParallax} className="containerZoomParallax">
            <div className="sticky">
                {
                    pictures.map(({ src, scale }, index) => {
                        return <motion.div key={index} style={{ scale }} className="el">
                            <div className="imageContainer">
                                <Image
                                    src={src}
                                    fill
                                    alt="image"
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>

    )
}