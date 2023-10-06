import Header from "./Header";
import InstallModal from "./InstallModal";

const InstallModalContainer = ({ handleContinueClick, handleBackClick }) => {
  return (
    <>
      <Header />
      <InstallModal
        handleBackClick={handleBackClick}
        handleContinueClick={handleContinueClick}
      />
    </>
  );
};

export default InstallModalContainer;
