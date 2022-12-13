import useTitleLogic from "@hooks/useTitleLogic";
import "@scss/components/_title.scss";

const TITLE = "T O D O";

const Title = () => {
  const { imgAdress, handleToggleTheme } = useTitleLogic();
  return (
    <h1 className='title'>
      <div>{TITLE}</div>
      <img
        src={imgAdress}
        className='toggle-theme-icon'
        onClick={handleToggleTheme}
      />
    </h1>
  );
};
export default Title;
