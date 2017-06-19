import {Component} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';
import {PieChartService} from './pieChart.service';

import 'easy-pie-chart/dist/jquery.easypiechart.js';

@Component({
  selector: 'pie-chart',
  templateUrl: './pieChart.html',
  styleUrls: ['./pieChart.scss']
})
// TODO: move easypiechart to component
export class PieChart {

  public charts: Array<Object>;
  private _init = false;
  private totalUsers: Number = 0;
  private totalTickets: Number = 0;
  private activeTickets: Number = 0;    
  

  constructor(private _pieChartService: PieChartService, private _baConfig: BaThemeConfigProvider) {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
      this.charts = [
      {
        color: pieColor,
        description: 'Total Users',
        stats: this.totalUsers,
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Profit',
        stats: '$ 89,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Total Tickets',
        stats: this.totalTickets,
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Active Tickets',
        stats: '32,592',
        icon: 'refresh',
      },
    ];
    
    this._pieChartService.getTotalTickets().then((res) => {
      this.totalTickets = res.total_tickets;
    });
    this._pieChartService.getData().then((res) => {
      this.totalUsers = res.users;
    });
    this._pieChartService.getTotalActiveTickets().then((res) => {
      this.activeTickets = res.active_tickets;
    });
  }

  ngAfterViewInit() {
    if (!this._init) {
      this._loadPieCharts();
      this._updatePieCharts();
      this._init = true;
    }
  }

  private _loadPieCharts() {

    jQuery('.chart').each(function () {
      let chart = jQuery(this);
      chart.easyPieChart({
        easing: 'easeOutBounce',
        onStep: function (from, to, percent) {
          jQuery(this.el).find('.percent').text(Math.round(percent));
        },
        barColor: jQuery(this).attr('data-rel'),
        trackColor: 'rgba(0,0,0,0)',
        size: 84,
        scaleLength: 0,
        animation: 2000,
        lineWidth: 9,
        lineCap: 'round',
      });
    });
  }

  private _updatePieCharts() {
    let getRandomArbitrary = (min, max) => { return Math.random() * (max - min) + min; };

    jQuery('.pie-charts .chart').each(function(index, chart) {
      jQuery(chart).data('easyPieChart').update(getRandomArbitrary(55, 90));
    });
  }
}
