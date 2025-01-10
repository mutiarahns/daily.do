export function Profile() {
  const imgUrl = "https://avatars.githubusercontent.com/u/101989651?v=4";
  const altText = "profile";

  return (
    <div>
      <img src={imgUrl} alt={altText} width={200} height={200} />
    </div>
  );
}
