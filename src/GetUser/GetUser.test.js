import { useUser } from "./GetUser";
const { data, isLoading, error } = useUser();
describe("Test custome hook getUser", () => {
  test("test IsLoading",()=>{
      expect(data).toBeCalledTimes(1)
      expect(isLoading).toBeTruthy()
  })
});
