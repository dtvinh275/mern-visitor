export interface VisitorButtonProps {
  type?: string;
  title: string;
  backgroundColor: string;
  color: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  handleClick?: () => void;
}

// export interface ProfileProps {
//     type: string;
//     name: string;
//     avatar: string;
//     email: string;
//     properties: Array | undefined;
// }

export interface VisitorProps {
  _id: string;
  fullName: string;
  phoneNumber: string;
  city: string;
  property: string;
  company: string;
  plateNumber: string;
}

export interface FormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  //handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  //propertyImage: { name: string; url: string };
}
