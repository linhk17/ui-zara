import { JobStatusEnum, PromotionStatusEnum, TransactionStatusEnum, UserStatusEnum } from "@enum/status.enum";

export const STATUS = [
  {
    id: UserStatusEnum.all,
    title: 'All',
    action: null
  },
  {
    id: UserStatusEnum.suspend,
    title: 'Suspend',
    action: 'Unblock'
  },
  {
    id: UserStatusEnum.active,
    title: 'Active',
    action: 'Block'
  },
];

export const JOB_STATUS = [
  {
    id: UserStatusEnum.all,
    title: 'All',
    action: null
  },
  {
    id: UserStatusEnum.active,
    title: 'Active',
    action: [
      {
        id: JobStatusEnum.completed,
        title: 'Complete'
      },
      {
        id: JobStatusEnum.canceled,
        title: 'Cancel'
      },
    ]
  },
  {
    id: JobStatusEnum.completed,
    title: 'Completed',
    action: null
  },
  {
    id: JobStatusEnum.unassigned,
    title: 'Unassigned',
    action: [{
      id: JobStatusEnum.rejected,
      title: 'Reject'
    }]
  },
  {
    id: JobStatusEnum.canceled,
    title: 'Canceled',
    action: null
  },
  {
    id: JobStatusEnum.rejected,
    title: 'Rejected',
    action: null
  }
];

export const TRANSACTION_STATUS = [
  {
    id: UserStatusEnum.all,
    title: 'All'
  },
  {
    id: TransactionStatusEnum.paid,
    title: 'Paid'
  },
  {
    id: TransactionStatusEnum.unpaid,
    title: 'Unpaid'
  }
];

export const PROMOTION_STATUS = [
  {
    id: UserStatusEnum.all,
    title: 'All'
  },
  {
    id: PromotionStatusEnum.active,
    title: 'Active'
  },
  {
    id: PromotionStatusEnum.inactive,
    title: 'Deactive'
  }
];