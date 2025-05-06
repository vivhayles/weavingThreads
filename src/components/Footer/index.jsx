import emotionCodeBadge from '../../images/emotionCodeBadge.png';
import bodyCodeBadge from '../../images/bodyCodeBadge.png';
import beliefCodeBadge from '../../images/beliefCodeBadge.png';

function Footer() {
    return (
        <footer className="bg-[#00472d] text-[#faf4ef] text-xs w-full mt-auto">
            <div className="container mx-auto px-6 flex justify-between items-center py-3">
                <div>
                    Copyright &copy; {new Date().getFullYear()} - Weaving Threads
                </div>
                <div className="flex items-center space-x-4">
                    <img
                        src={emotionCodeBadge}
                        alt="Emotion Code badge"
                        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                    <img
                        src={bodyCodeBadge}
                        alt="Body Code badge"
                        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                    <img
                        src={beliefCodeBadge}
                        alt="Belief Code badge"
                        className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
                    />
                </div>
            </div>
        </footer>
    );
}

export default Footer;