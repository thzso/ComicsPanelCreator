import BackButton from "./BackButton";

export default function CharacterCard({
  picUrl,
  filterColorClass,
  nameOfChar,
  onlyCardIsClicked,
  contentOfBubble,
}) {
  // console.log(contentOfBubble);

  return (
    <div
      className={
        onlyCardIsClicked
          ? "container--CharacterCard_main characterCard_clicked"
          : "container--CharacterCard_main"
      }
    >
      <p id={onlyCardIsClicked ? "p--characterCard_clicked-id" : "p--characterCard_default-id" }>
        <em>{nameOfChar}</em>
      </p>
      {onlyCardIsClicked && (
        <>
          <div id="bubble-container">
            <div className="bubble bubble-bottom-left">
              <em>{contentOfBubble}</em>
            </div>
          </div>
        </>
      )}

      <img className={filterColorClass} id={onlyCardIsClicked ? "img--characterCard_clicked-id" : "" }src={picUrl} />
    </div>
  );
}
