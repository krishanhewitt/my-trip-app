import useAuth from "../user-auth/useAuth";

export default function Home() {
  const { token } = useAuth();
  const user = token.userInfo;

  return (
    <>
      <h1 className="text-center text-2xl my-4">
        Welcome back, {user.nickname}!
      </h1>
    </>
  );
}
