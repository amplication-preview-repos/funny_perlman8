import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProfileCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  birthDate?: Date | null;
  user?: UserWhereUniqueInput | null;
};
