import InstallModalContainer from "./InstallModalContainer";
import Install from "./Install";
import Publish from "./Publish";
import VerifyInstall from "./VerifyInstall";
import Comment from "./Comment";
import { useState } from "react";

const AppLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleContinueClick = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handleBackClick = () => {
    if (currentIndex <= 0) return;
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1;
    });
  };

  const Component = [
    InstallModalContainer,
    Install,
    Publish,
    VerifyInstall,
    Comment,
  ];

  const CurrentComponent = Component[currentIndex];

  return (
    <div>
      <CurrentComponent
        handleBackClick={handleBackClick}
        handleContinueClick={handleContinueClick}
      />
    </div>
  );
};

export default AppLayout;
