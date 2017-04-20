import {Component} from "@angular/core";
import {WalletService} from "../../../wallet/wallet.service";
import {MdDialog} from "@angular/material";
import {RecordDialogComponent} from "../../../shared/record-dialog/record-dialog.component";
import * as moment from 'moment';

@Component({
  selector: 'day',
  templateUrl: './day.html',
  styleUrls: ['./day.scss']
})
export class DayComponent {
  total: number = 0;
  groupedData: any = [];

  walletSubscriber: any;

  constructor(private dialog: MdDialog, private walletService: WalletService) {
    this.sync();
  }

  sync() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
    this.walletSubscriber = this.walletService.wallet.subscribe((data) => {
      let lastDate = '', tempData;

      this.total = data.reduce((acc, record) => {
        return acc + +record.amount;
      }, 0);

      this.groupedData = [];
      data.forEach((record) => {
        if (lastDate != record.date) {
          lastDate = record.date;
          tempData = {
            date: lastDate,
            amount: 0,
            records: []
          };
          tempData.amount += +record.amount;
          tempData.records.push(record);
          this.groupedData.push(tempData);
        } else {
          tempData.amount += +record.amount;
          tempData.records.push(record);
        }
      });
    });
  }

  edit(record) {
    let dialogRef = this.dialog.open(RecordDialogComponent);
    dialogRef.componentInstance.data = record;
    dialogRef.afterClosed().subscribe((params) => {
      if (params) {
        params.created = +moment(params.date);
        this.walletService.update(record.$key, params);
      }
    });

  }

  remove(record) {
    this.walletService.remove(record.$key);
  }

  ngOnDestroy() {
    this.walletSubscriber && this.walletSubscriber.unsubscribe();
  }
}
